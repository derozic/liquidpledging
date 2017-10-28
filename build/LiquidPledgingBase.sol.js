/* This is an autogenerated file. DO NOT EDIT MANUALLY */

exports.ILiquidPledgingPluginAbi = [{"constant":false,"inputs":[{"name":"pledgeManager","type":"uint64"},{"name":"pledgeFrom","type":"uint64"},{"name":"pledgeTo","type":"uint64"},{"name":"context","type":"uint64"},{"name":"amount","type":"uint256"}],"name":"afterTransfer","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"pledgeManager","type":"uint64"},{"name":"pledgeFrom","type":"uint64"},{"name":"pledgeTo","type":"uint64"},{"name":"context","type":"uint64"},{"name":"amount","type":"uint256"}],"name":"beforeTransfer","outputs":[{"name":"maxAllowed","type":"uint256"}],"payable":false,"type":"function"}]
exports.ILiquidPledgingPluginByteCode = "0x"
exports.LiquidPledgingBaseAbi = [{"constant":true,"inputs":[{"name":"idPledge","type":"uint64"},{"name":"idxDelegate","type":"uint256"}],"name":"getPledgeDelegate","outputs":[{"name":"idDelegate","type":"uint64"},{"name":"addr","type":"address"},{"name":"name","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"projectId","type":"uint64"}],"name":"isProjectCanceled","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"numberOfPledges","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"idPledge","type":"uint64"}],"name":"getPledge","outputs":[{"name":"amount","type":"uint256"},{"name":"owner","type":"uint64"},{"name":"nDelegates","type":"uint64"},{"name":"intendedProject","type":"uint64"},{"name":"commitTime","type":"uint64"},{"name":"oldPledge","type":"uint64"},{"name":"paymentState","type":"uint8"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"name","type":"string"},{"name":"url","type":"string"},{"name":"commitTime","type":"uint64"},{"name":"plugin","type":"address"}],"name":"addDelegate","outputs":[{"name":"idDelegate","type":"uint64"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"numberOfPledgeAdmins","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"name","type":"string"},{"name":"url","type":"string"},{"name":"projectAdmin","type":"address"},{"name":"parentProject","type":"uint64"},{"name":"commitTime","type":"uint64"},{"name":"plugin","type":"address"}],"name":"addProject","outputs":[{"name":"idProject","type":"uint64"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"name","type":"string"},{"name":"url","type":"string"},{"name":"commitTime","type":"uint64"},{"name":"plugin","type":"address"}],"name":"addGiver","outputs":[{"name":"idGiver","type":"uint64"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"idDelegate","type":"uint64"},{"name":"newAddr","type":"address"},{"name":"newName","type":"string"},{"name":"newUrl","type":"string"},{"name":"newCommitTime","type":"uint64"}],"name":"updateDelegate","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"idGiver","type":"uint64"},{"name":"newAddr","type":"address"},{"name":"newName","type":"string"},{"name":"newUrl","type":"string"},{"name":"newCommitTime","type":"uint64"}],"name":"updateGiver","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"idAdmin","type":"uint64"}],"name":"getPledgeAdmin","outputs":[{"name":"adminType","type":"uint8"},{"name":"addr","type":"address"},{"name":"name","type":"string"},{"name":"url","type":"string"},{"name":"commitTime","type":"uint64"},{"name":"parentProject","type":"uint64"},{"name":"canceled","type":"bool"},{"name":"plugin","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"idProject","type":"uint64"},{"name":"newAddr","type":"address"},{"name":"newName","type":"string"},{"name":"newUrl","type":"string"},{"name":"newCommitTime","type":"uint64"}],"name":"updateProject","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"vault","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"inputs":[{"name":"_vault","type":"address"}],"payable":false,"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"idGiver","type":"uint64"}],"name":"GiverAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"idGiver","type":"uint64"}],"name":"GiverUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"idDelegate","type":"uint64"}],"name":"DelegateAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"idDelegate","type":"uint64"}],"name":"DelegateUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"idProject","type":"uint64"}],"name":"ProjectAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"idAdmin","type":"uint64"}],"name":"ProjectUpdated","type":"event"}]
exports.LiquidPledgingBaseByteCode = "0x606060405234156200001057600080fd5b60405160208062001fb4833981016040528080519150505b60016200003681806200006a565b506001620000466000826200009f565b5060028054600160a060020a031916600160a060020a0383161790555b5062000255565b8154818355818115116200009957600502816005028360005260206000209182019101620000999190620000d4565b5b505050565b815481835581811511620000995760040281600402836000526020600020918201910162000099919062000148565b5b505050565b6200014591905b8082111562000141578054600160a860020a03191681556000620001036001830182620001ba565b62000113600283016000620001ba565b506003810180546001608860020a0319169055600481018054600160a060020a0319169055600501620000db565b5090565b90565b6200014591905b808211156200014157600080825560018201805467ffffffffffffffff191690556200017f600283018262000206565b506003810180547fffffffffffffff000000000000000000000000000000000000000000000000001690556004016200014f565b5090565b90565b50805460018160011615610100020316600290046000825580601f10620001e2575062000202565b601f01602090049060005260206000209081019062000202919062000231565b5b50565b50805460008255600301600490049060005260206000209081019062000202919062000231565b5b50565b6200014591905b8082111562000141576000815560010162000238565b5090565b90565b611d4f80620002656000396000f300606060405236156100c25763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166314e7b1dc81146100c75780632101a6ad146101835780632a8ec8cc146101b75780633f657a46146101dc57806352dc7dcc1461025c5780635503d9ba1461032657806372116e921461034b5780637f61fa9314610425578063cc19ecf7146104ef578063db7c2314146105ae578063eba8ba061461066d578063f6b24b1c146107c7578063fbfa77cf14610886575b600080fd5b34156100d257600080fd5b6100ea67ffffffffffffffff600435166024356108b5565b60405167ffffffffffffffff84168152600160a060020a038316602082015260606040820181815290820183818151815260200191508051906020019080838360005b838110156101465780820151818401525b60200161012d565b50505050905090810190601f1680156101735780820380516001836020036101000a031916815260200191505b5094505050505060405180910390f35b341561018e57600080fd5b6101a367ffffffffffffffff600435166109dd565b604051901515815260200160405180910390f35b34156101c257600080fd5b6101ca610a9b565b60405190815260200160405180910390f35b34156101e757600080fd5b6101fc67ffffffffffffffff60043516610aa6565b60405187815267ffffffffffffffff8088166020830152868116604083015285811660608301528481166080830152831660a082015260c0810182600281111561024257fe5b60ff16815260200197505050505050505060405180910390f35b341561026757600080fd5b61030960046024813581810190830135806020601f8201819004810201604051908101604052818152929190602084018383808284378201915050505050509190803590602001908201803590602001908080601f0160208091040260200160405190810160405281815292919060208401838380828437509496505050833567ffffffffffffffff169360200135600160a060020a03169250610b2e915050565b60405167ffffffffffffffff909116815260200160405180910390f35b341561033157600080fd5b6101ca610d24565b60405190815260200160405180910390f35b341561035657600080fd5b61030960046024813581810190830135806020601f8201819004810201604051908101604052818152929190602084018383808284378201915050505050509190803590602001908201803590602001908080601f01602080910402602001604051908101604052818152929190602084018383808284375094965050600160a060020a03853581169567ffffffffffffffff602082013581169650604082013516945060600135169150610d2f9050565b60405167ffffffffffffffff909116815260200160405180910390f35b341561043057600080fd5b61030960046024813581810190830135806020601f8201819004810201604051908101604052818152929190602084018383808284378201915050505050509190803590602001908201803590602001908080601f0160208091040260200160405190810160405281815292919060208401838380828437509496505050833567ffffffffffffffff169360200135600160a060020a0316925061116b915050565b60405167ffffffffffffffff909116815260200160405180910390f35b34156104fa57600080fd5b6105ac6004803567ffffffffffffffff169060248035600160a060020a0316919060649060443590810190830135806020601f8201819004810201604051908101604052818152929190602084018383808284378201915050505050509190803590602001908201803590602001908080601f0160208091040260200160405190810160405281815292919060208401838380828437509496505050923567ffffffffffffffff169250611360915050565b005b34156105b957600080fd5b6105ac6004803567ffffffffffffffff169060248035600160a060020a0316919060649060443590810190830135806020601f8201819004810201604051908101604052818152929190602084018383808284378201915050505050509190803590602001908201803590602001908080601f0160208091040260200160405190810160405281815292919060208401838380828437509496505050923567ffffffffffffffff16925061144e915050565b005b341561067857600080fd5b61068d67ffffffffffffffff6004351661153c565b6040518089600281111561069d57fe5b60ff168152600160a060020a03898116602083015267ffffffffffffffff8781166080840152861660a083015284151560c0830152831660e08201526101008282038101604083019081529160608101910189818151815260200191508051906020019080838360005b838110156107205780820151818401525b602001610707565b50505050905090810190601f16801561074d5780820380516001836020036101000a031916815260200191505b50838103825288818151815260200191508051906020019080838360005b838110156107845780820151818401525b60200161076b565b50505050905090810190601f1680156107b15780820380516001836020036101000a031916815260200191505b509a505050505050505050505060405180910390f35b34156107d257600080fd5b6105ac6004803567ffffffffffffffff169060248035600160a060020a0316919060649060443590810190830135806020601f8201819004810201604051908101604052818152929190602084018383808284378201915050505050509190803590602001908201803590602001908080601f0160208091040260200160405190810160405281815292919060208401838380828437509496505050923567ffffffffffffffff169250611708915050565b005b341561089157600080fd5b6108996117f6565b604051600160a060020a03909116815260200160405180910390f35b6000806108c0611ae6565b6000806108cc87611805565b915081600201600187038154811015156108e257fe5b90600052602060002090600491828204019190066008025b9054906101000a900467ffffffffffffffff16945061091885611850565b90508060000160019054906101000a9004600160a060020a03169350806001018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156109cc5780601f106109a1576101008083540402835291602001916109cc565b820191906000526020600020905b8154815290600101906020018083116109af57829003601f168201915b505050505092505b50509250925092565b6000806109e983611850565b905060005b815460ff1660028111156109fe57fe5b1415610a0d5760009150610a95565b60025b815460ff166002811115610a2057fe5b14610a2757fe5b6003810154608060020a900460ff1615610a445760019150610a95565b600381015468010000000000000000900467ffffffffffffffff161515610a6e5760009150610a95565b6003810154610a929068010000000000000000900467ffffffffffffffff166109dd565b91505b50919050565b600054600019015b90565b600080600080600080600080610abb89611805565b8054600182015460028301546003840154929b5067ffffffffffffffff9182169a509850808216975068010000000000000000820481169650608060020a82041694507801000000000000000000000000000000000000000000000000900460ff16925090505b50919395979092949650565b600180549081808201610b418382611af8565b916000526020600020906005020160005b6101006040519081016040528060015b8152600160a060020a033381166020830152604082018b9052606082018a905267ffffffffffffffff89166080830152600060a0830181905260c0830152871660e09091015291905081518154829060ff19166001836002811115610bc357fe5b021790555060208201518154600160a060020a03919091166101000261010060a860020a0319909116178155604082015181600101908051610c09929160200190611b2a565b50606082015181600201908051610c24929160200190611b2a565b50608082015160038201805467ffffffffffffffff191667ffffffffffffffff9290921691909117905560a08201518160030160086101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555060c0820151600382018054911515608060020a0270ff000000000000000000000000000000001990921691909117905560e0820151600491909101805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03909216919091179055505067ffffffffffffffff81167f014882843f1e57bd41e0826ad1cd5e6180d4d4f76df8b12edc8b44575322d94e60405160405180910390a25b949350505050565b600154600019015b90565b60008067ffffffffffffffff851615610f6f57610d4b85611850565b905060025b815460ff166002811115610d6057fe5b14610d6a57600080fd5b6014610f65826101006040519081016040528154909190829060ff166002811115610d9157fe5b6002811115610d9c57fe5b81526020016000820160019054906101000a9004600160a060020a0316600160a060020a0316600160a060020a03168152602001600182018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610e685780601f10610e3d57610100808354040283529160200191610e68565b820191906000526020600020905b815481529060010190602001808311610e4b57829003601f168201915b50505050508152602001600282018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610f0a5780601f10610edf57610100808354040283529160200191610f0a565b820191906000526020600020905b815481529060010190602001808311610eed57829003601f168201915b5050509183525050600382015467ffffffffffffffff8082166020840152680100000000000000008204166040830152608060020a900460ff1615156060820152600490910154600160a060020a031660809091015261189d565b10610f6f57600080fd5b5b60018054925082808201610f848382611af8565b916000526020600020906005020160005b6101006040519081016040528060025b8152600160a060020a03808c166020830152604082018e9052606082018d905267ffffffffffffffff808b1660808401528b1660a0830152600060c0830152881660e09091015291905081518154829060ff1916600183600281111561100757fe5b021790555060208201518154600160a060020a03919091166101000261010060a860020a031990911617815560408201518160010190805161104d929160200190611b2a565b50606082015181600201908051611068929160200190611b2a565b50608082015160038201805467ffffffffffffffff191667ffffffffffffffff9290921691909117905560a08201518160030160086101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555060c0820151600382018054911515608060020a0270ff000000000000000000000000000000001990921691909117905560e0820151600491909101805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03909216919091179055505067ffffffffffffffff82167fd7db7003e8f35149eda3d3685c2ab151ee561ad34853fdb0f4d7ecb33fff889060405160405180910390a25b509695505050505050565b60018054908180820161117e8382611af8565b916000526020600020906005020160005b6101006040519081016040528060005b8152600160a060020a033381166020830152604082018b9052606082018a905267ffffffffffffffff89166080830152600060a0830181905260c0830152871660e09091015291905081518154829060ff1916600183600281111561120057fe5b021790555060208201518154600160a060020a03919091166101000261010060a860020a0319909116178155604082015181600101908051611246929160200190611b2a565b50606082015181600201908051611261929160200190611b2a565b50608082015160038201805467ffffffffffffffff191667ffffffffffffffff9290921691909117905560a08201518160030160086101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555060c0820151600382018054911515608060020a0270ff000000000000000000000000000000001990921691909117905560e0820151600491909101805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03909216919091179055505067ffffffffffffffff81167efc763def3c85dbc7bab43e314ba21264ec158217c45cf1eaf94f5ae15bc2c560405160405180910390a25b949350505050565b600061136b86611850565b905060015b815460ff16600281111561138057fe5b1461138a57600080fd5b805433600160a060020a0390811661010090920416146113a957600080fd5b805461010060a860020a031916610100600160a060020a03871602178155600181018480516113dc929160200190611b2a565b50600281018380516113f2929160200190611b2a565b5060038101805467ffffffffffffffff191667ffffffffffffffff8481169190911790915586167f01a3bd608e7be74358498f90bd2ff305f9fdb8e94d76167f40fef03aae56620360405160405180910390a25b505050505050565b600061145986611850565b905060005b815460ff16600281111561146e57fe5b1461147857600080fd5b805433600160a060020a03908116610100909204161461149757600080fd5b805461010060a860020a031916610100600160a060020a03871602178155600181018480516114ca929160200190611b2a565b50600281018380516114e0929160200190611b2a565b5060038101805467ffffffffffffffff191667ffffffffffffffff8481169190911790915586167fe8da06f5d4d8fa2ef122c9fc3d5ae15379d95f5b9ebf92a5821b57705600320a60405160405180910390a25b505050505050565b600080611547611ae6565b61154f611ae6565b60008060008060006115608a611850565b80546001808301805460ff84169d5061010093849004600160a060020a03169c509394509260029181161590920260001901909116046020601f820181900481020160405190810160405280929190818152602001828054600181600116156101000203166002900480156116165780601f106115eb57610100808354040283529160200191611616565b820191906000526020600020905b8154815290600101906020018083116115f957829003601f168201915b50505050509650806002018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156116b55780601f1061168a576101008083540402835291602001916116b5565b820191906000526020600020905b81548152906001019060200180831161169857829003601f168201915b505050506003830154600484015492985067ffffffffffffffff8082169850680100000000000000008204169650608060020a900460ff16945050600160a060020a031691505b50919395975091939597565b600061171386611850565b905060025b815460ff16600281111561172857fe5b1461173257600080fd5b805433600160a060020a03908116610100909204161461175157600080fd5b805461010060a860020a031916610100600160a060020a0387160217815560018101848051611784929160200190611b2a565b506002810183805161179a929160200190611b2a565b5060038101805467ffffffffffffffff191667ffffffffffffffff8481169190911790915586167f035196d5942819024277421e936a2e76840abb7bb5a320924ce0a9826daeba4460405160405180910390a25b505050505050565b600254600160a060020a031681565b6000805467ffffffffffffffff83161061181e57600080fd5b6000805467ffffffffffffffff841690811061183657fe5b906000526020600020906004020160005b5090505b919050565b60015460009067ffffffffffffffff83161061186b57600080fd5b6001805467ffffffffffffffff841690811061188357fe5b906000526020600020906005020160005b5090505b919050565b60008060025b835160028111156118b057fe5b146118b757fe5b8260a0015167ffffffffffffffff1615156118d55760019150610a95565b6118e28360a00151611850565b9050610a92816101006040519081016040528154909190829060ff166002811115610d9157fe5b6002811115610d9c57fe5b81526020016000820160019054906101000a9004600160a060020a0316600160a060020a0316600160a060020a03168152602001600182018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610e685780601f10610e3d57610100808354040283529160200191610e68565b820191906000526020600020905b815481529060010190602001808311610e4b57829003601f168201915b50505050508152602001600282018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610f0a5780601f10610edf57610100808354040283529160200191610f0a565b820191906000526020600020905b815481529060010190602001808311610eed57829003601f168201915b5050509183525050600382015467ffffffffffffffff8082166020840152680100000000000000008204166040830152608060020a900460ff1615156060820152600490910154600160a060020a031660809091015261189d565b91505b50919050565b60206040519081016040526000815290565b815481835581811511611b2457600502816005028360005260206000209182019101611b249190611c28565b5b505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10611b6b57805160ff1916838001178555611b98565b82800160010185558215611b98579182015b82811115611b98578251825591602001919060010190611b7d565b5b50611ba5929150611cba565b5090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10611b6b57805160ff1916838001178555611b98565b82800160010185558215611b98579182015b82811115611b98578251825591602001919060010190611b7d565b5b50611ba5929150611cba565b5090565b610aa391905b80821115611ba557805474ffffffffffffffffffffffffffffffffffffffffff191681556000611c616001830182611cdb565b611c6f600283016000611cdb565b5060038101805470ffffffffffffffffffffffffffffffffff1916905560048101805473ffffffffffffffffffffffffffffffffffffffff19169055600501611c2e565b5090565b90565b610aa391905b80821115611ba55760008155600101611cc0565b5090565b90565b50805460018160011615610100020316600290046000825580601f10611d015750611d1f565b601f016020900490600052602060002090810190611d1f9190611cba565b5b505600a165627a7a723058204bd6a72929ff44e3c3bea90724d89e30a85211fbd2f57b36dea5426aae176b880029"
exports.VaultAbi = [{"constant":false,"inputs":[{"name":"_ref","type":"bytes32"},{"name":"_dest","type":"address"},{"name":"_amount","type":"uint256"}],"name":"authorizePayment","outputs":[],"payable":false,"type":"function"},{"payable":true,"type":"fallback"}]
exports.VaultByteCode = "0x"
exports._solcVersion = "0.4.15+commit.bbb8e64f.Emscripten.clang"
exports._sha256 = "0x00da6477dee0f43310baa4b1b29ad7b8b75f7026845b8103e023cdc911a56f07"
